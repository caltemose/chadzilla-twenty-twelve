Zepto(function($){
  var jobs = $('.jobs li');
  jobImages = [
  	{id:"circus",img:"assets/img/jobs/circus.jpg"},
  	{id:"webmd",img:"assets/img/jobs/webmd.png"},
  	{id:"sabbatical",img:"assets/img/jobs/sabbatical.jpg"}
  ];
  $(jobs).each(function(indx,item){
  	$(item).click(function(e){
      //console.log( $(this).attr("id") );
      var job = getJobById($(this).attr("id"));
      //console.log("job: " + job.img);
      $('#jobOverlay').html( '<img src="' + job.img + '" alt="' + job.id + '" class="job-overlay" />');
  	});
  });
  $('#jobOverlay').click(function(e){
  	$('#jobOverlay').html('');
  });
});

var jobImages;
function getJobById(id){
  var i;
  for(i=0; i<jobImages.length; i++) {
    if (jobImages[i].id===id) return jobImages[i];
  }
  return null;
}