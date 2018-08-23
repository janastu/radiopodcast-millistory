/* app init */

document.onload = (function($, Player){
	$("[data-type=slide]").lightGallery({
		thumbnail: false
	});

	// query for anchors and store in Array
	var audioAnchor = Array.prototype.slice.call(document.querySelectorAll('.feed'));
	//console.log(audioAnchor, "before splice");
	// remove unwanted node which is now -1
	//audioAnchor.splice(audioAnchor.length, 1);
	
	//console.log(audioAnchor, "after splice");
	// Bind Event Listener - player is Howler
	audioAnchor.forEach(function(item, index){
		console.log(item, "index");
		item.addEventListener('click', function(e){
			Player.skipTo(index);
		}, index);
	});


})(jQuery, window.player);