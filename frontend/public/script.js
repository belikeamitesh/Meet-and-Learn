const video = document.getElementById("video");

Promise.all([
	faceapi.nets.tinyFaceDetector.loadFromUri("models"),
	faceapi.nets.faceLandmark68Net.loadFromUri("models"),
	faceapi.nets.faceRecognitionNet.loadFromUri("models"),
]).then(startVideo);

function startVideo() {
	navigator.getUserMedia(
		{ video: {} },
		(stream) => (video.srcObject = stream),
		(err) => console.error(err)
	);
}
function stopvideo() {
	const mediaStream = video.srcObject;

	// Through the MediaStream, you can get the MediaStreamTracks with getTracks():
	const tracks = mediaStream.getTracks();

	// Tracks are returned as an array, so if you know you only have one, you can stop it with:
	tracks[0].stop();

	// Or stop all like so:
	tracks.forEach((track) => track.stop());

	console.log("the video services has stopped");

	if (personfound >= 20) {
		location.replace("/login");
	} else if (nopersonfound >= 100) {
		location.replace("/verificationfailed");
	}
}

var nopersonfound = 0;
var personfound = 0;

video.onplay = () => {
	var canvas = faceapi.createCanvasFromMedia(video);
	document.body.append(canvas);
	const displaySize = { width: video.width, height: video.height };
	faceapi.matchDimensions(canvas, displaySize);
	var intervalId = setInterval(async () => {
		const detections = await faceapi
			.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
			.withFaceLandmarks();
		const resizedDetections = faceapi.resizeResults(detections, displaySize);

		canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
		faceapi.draw.drawDetections(canvas, resizedDetections);
		faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

		if (detections[0] === undefined || detections[0] === null) {
			nopersonfound += 1;
			console.log(nopersonfound);
			console.log("no person found");
		} else {
			personfound += 1;
		}

		if (personfound >= 20) {
			console.log("hello fellow human");
			clearInterval(intervalId);
			canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
			stopvideo();
		} else if (nopersonfound >= 100) {
			clearInterval(intervalId);
			canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
			console.log("no person found!!!! please retry");
			stopvideo();
		}
	}, 100);
};
