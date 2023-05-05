const serverless = require("serverless-http");
const express = require("express");
const app = express();
const User = require('./user.model')
const Address = require('./address.model')
const mongoose = require('mongoose')
app.use(express.json())
require("dotenv").config()

app.get("/", (req,res) => {
  res.send("Problema de rota resolvido.")
})

app.get("/users", async (req,res) => {
  try{
      const users = await User.find()
      res.json(users)
  } catch(e){
      console.log(e)
      res.send("Ocorreu algum erro ao retornar usuarios")
  }
})

app.get("/users/:id", async (req,res) => {
  try{
      const {id} = req.params
      const user = await User.findById(id)        
      res.json(user)
  } catch(e){
      console.log(e)
      res.send("Ocorreu algum erro ao retornar usuario")
  }
})

app.post("/users", async (req,res) => {
  try{
      const user = new User(req.body)
      const response = await user.save()
      res.status(201).json(response)
  } catch(e){
      console.log(e)
      res.send("Ocorreu algum erro ao salvar usuario")
  }    
})

app.delete("/users/:id", async (req,res) => {
  try{
      const _id = req.params.id
      const response = await User.deleteOne({_id})
      res.json(response)
  } catch(e){
      console.log(e)
      res.send({"Error":"Ocorreu algum erro ao remover usuario "})
  }
})

app.put("/users/:id",async (req,res) => {
  try {
      const _id = req.params.id
      const user = await User.updateOne( { _id } ,req.body)
      res.json(user)
  }catch (e){
      console.log(e)
      res.send({"Error":"Ocorreu algum erro ao atualizar usuario "})
  }        
})

app.get("/address",async (req,res) => {
  try{
      const addresses = await Address.find()
      res.json(addresses)
  }catch (e) {
      res.send("Ocorreu um erro ao retornar o endereço")
  }
})
app.get("/address/:id", async (req,res) => {
  try{
      const {id} = req.params
      const address = await Address.findById(id)        
      res.json(address)
  } catch(e){
      console.log(e)
      res.send("Ocorreu algum erro ao retornar usuario")
  }
})

app.put("/address/:id",async (req,res) => {
  try {
      const _id = req.params.id
      const address = await Address.updateOne( { _id } ,req.body)
      res.json(address)
  }catch (e){
      console.log(e)
      res.send({"Error":"Ocorreu algum erro ao atualizar Endereço "})
  }        
})

app.delete("/address/:id", async (req,res) => {
  try{
      const _id = req.params.id
      const response = await Address.deleteOne({_id})
      res.json(response)
  } catch(e){
      console.log(e)
      res.send({"Error":"Ocorreu algum erro ao remover endereço "})
  }
})

app.post("/address", async (req,res) => {
  try{
      const address = new Address(req.body)
      const response = await address.save()
      res.status(201).json(response)
  } catch(e){
      console.log(e)
      res.send("Ocorreu algum erro ao salvar endereço")
  }    
})

app.listen(process.env.PORT, () =>{
  console.log(`"Estamos funcionando 🚀 na porta: ${process.env.PORT}"`)
})

module.exports.handler = serverless(app);
