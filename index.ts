import {b64Image} from "./data";

const projectId = '';
const {ImageAnnotatorClient, IBatchAnnotateImagesRequest} = require('@google-cloud/vision').v1;

// Instantiates a client
const visionClient = new ImageAnnotatorClient({
    projectId: projectId,
});

async function callBatchAnnotateImages() {
    // Construct request
    const request = {

        "requests": [
            {
                "image": {

                    content: b64Image
                },
                "features": [
                    {
                        "type": "LABEL_DETECTION"
                    }
                ]
            }
        ]


    };

    // Run request
    const response = await visionClient.batchAnnotateImages(request);
    console.log(JSON.stringify(response, null , 2));
}

callBatchAnnotateImages();
