import { connectDomain } from 'backend/connectDomain'

$w.onReady(function () {
    console.log("this is the onready function")
});


$w("#connectButton").onClick(async (event) => {
	console.log("clicked connect button")
	let domainName = $w('#domainName').value
	let connectionType = $w('#connectionTypeDrop').value
	let accountId = $w('#accountDrop').value
    let siteId = $w('#msidInput').value
	// let siteId = wixLocation.query.wixSiteId;

	// console.log(`site id from url is: ${siteId}`)
    
    let body = {domainConnection:
        {
            domain: domainName,
            connection_type: connectionType
        }
    }

	try {
		$w('#connectButton').disable()
		let connectionresponse = await connectDomain(body, accountId, siteId)
		console.log(connectionresponse)
	}  catch (error) {
		console.log(error)
	}
	$w('#connectButton').enable()
})