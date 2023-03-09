import { connectDomain } from 'backend/connectDomain'

$w.onReady(function () {
    $w('#responseText').hide()
    console.log("this is the onready function")
});


$w("#connectButton").onClick(async (event) => {
	console.log("clicked connect button")
	let domainName = $w('#domainName').value
	let connectionType = $w('#connectionTypeDrop').value
	let pernatAccountId = $w('#perntAccountDrop').value
    let accountId = $w('#accountId').value
    let siteId = $w('#msidInput').value
	// let siteId = wixLocation.query.wixSiteId;

	// console.log(`site id from url is: ${siteId}`)
    
    let body = {domainConnection:
        {
            domain: `${domainName}`,
            // connection_type: `${connectionType}`,
            assign_as: "PRIMARY"
        }
    }

	try {
		$w('#connectButton').disable()
		let connectionresponse = await connectDomain(body, pernatAccountId, accountId, siteId)
        $w('#responseText').text = JSON.stringify(connectionresponse)
        $w('#responseText').show()
		console.log(JSON.stringify(connectionresponse))
	}  catch (error) {
        $w('#responseText').text = `Connect Domain ${error}`
        $w('#responseText').show()
	}
	$w('#connectButton').enable()
})

function displayConnectionDitalis() {
}