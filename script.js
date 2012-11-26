;(function _eventTrackingGA(){
	var elems = getElemAttr('data-type'),
		_event,
		type,
		categories,
		actions,
		labels,
		values;
		
		
		for (var i = 0; i < elems.length; i++) {
			_event     = elems[i].getAttribute("data-event")
			type       = elems[i].getAttribute("data-type");
			categories = elems[i].getAttribute("data-categories");
			actions    = elems[i].getAttribute("data-actions");
			labels     = elems[i].getAttribute("data-labels");
			values     = elems[i].getAttribute("data-values");
			
			switch(_event){
			case 'click':
				elems[i].onclick = function(){
					gaPush(type,categories,actions,labels,values)	
				}
				break;
			case 'focus':
				elems[i].onfocus = function(){
					gaPush(type,categories,actions,labels,values)	
				}
				break;
			case 'blur':
				elems[i].onblur = function(){
					gaPush(type,categories,actions,labels,values)	
				}
				break;
			case 'submit':
				elems[i].onsubmit = function(){
					gaPush(type,categories,actions,labels,values)	
				}
				break;
			}
		};

})();

function gaPush(type,categories,actions,labels,values){
	 _gaq.push([type,categories,actions,labels,values]);
}

function getElemAttr(attr){
	var tags = [];
	var allElements = document.getElementsByTagName('*');
	for (var i = 0; i < allElements.length; i++){
		if (allElements[i].getAttribute(attr)){
			tags.push(allElements[i]);
		}
	}
	return tags;
}
