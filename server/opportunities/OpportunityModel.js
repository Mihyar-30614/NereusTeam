var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var opportunitySchema = new mongoose.Schema({
  title : {
  	type : String,
  	required : true
  },
  _organizer : { 
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Organization',
  },
  startDate : {
    type: String,
    required: true
  },
  endDate : String,
  location : String,
  // locationId : String,
  causesArea : [String],
  description : String,
  skillsRequired : [String],
  poster : String,
  currOpenings: [{ type: Schema.Types.ObjectId, ref: 'Opening' }],
  closedOpenings: [{ type: Schema.Types.ObjectId, ref: 'Opening' }],
  status: {
    type: String,
    enum: ['Active', 'Closed']
  }
});
var Opportunity = mongoose.model('Opportunity', opportunitySchema);


// var newEvent=new Event({
//   title : 'new Event'
// });

// newEvent.save(function (err,newEntry) {
//   console.log(newEntry);
// })

module.exports = Opportunity;