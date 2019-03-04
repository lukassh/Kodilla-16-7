var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var prefix = "https://cors-anywhere.herokuapp.com/";
var myHeaders = {
  'X-Client-Id': '3878',
  'X-Auth-Token': 'a0b90e630fd1303a299243445e158e1c'
};
// KLASA KANBAN CARD
function Card(id, name) {
  	var self = this;

  	
  	this.id = id;
    this.name = name || 'No name given';
  	this.element = generateTemplate('card-template', { description: this.name }, 'li');

  	this.element.querySelector('.card').addEventListener('click', function (event) {
    	event.stopPropagation();

    	if (event.target.classList.contains('btn-delete')) {
      		self.removeCard();
    	}
  	});
}
Card.prototype = {
  removeCard: function() {
    var self = this;

    fetch(prefix + baseUrl + '/card/' + self.id, { method: 'DELETE', headers: myHeaders })
      .then(function(resp) {
        return resp.json();
      })
      .then(function(resp) {
        self.element.parentNode.removeChild(self.element);
      })
  }
}