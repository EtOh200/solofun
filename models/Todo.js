const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todoTitle: {
    type: String,
    required: true
  },
  task: {
    type: String,
    required: true
  },  
  status: {
    type: String,
    default: 'public',
    enum: ['public', 'private']
  },  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },  
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Todo', TodoSchema)