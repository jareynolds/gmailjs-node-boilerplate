

module.exports = {

  //
  getTokenAuth: function(checkDomain) {
      console.log("inside getTokenAuth");

      var targetUrl = 'https://api.domaintools.com/v1/risk/domaintools.com';
      
      
      var dtUserLabel = '?api_username=';
      var dtUserId = '<your-dt-userid>';

      var dtKeyLabel = '&api_key=';
      var dtKeyId = '<your-dt-token>';
      
      var dtDomainLabel = '&domain=';
      var dtDomainId = checkDomain;

      
      //
      var request = new XMLHttpRequest();
      
      request.overrideMimeType("application/json")
      //request.open('GET', targetUrl + checkDomain, true)
      request.open('GET', targetUrl+dtUserLabel+dtUserId+dtKeyLabel+dtKeyId+dtDomainLabel+dtDomainId, true)

      request.onload = function() {
          console.log("Inside (request.onload)")
          let riskScoreData = JSON.parse(request.response)
          console.log(riskScoreData)
          console.log(riskScoreData.response.risk_score)
          let showRiskScore = riskScoreData.response.risk_score
          if (showRiskScore > 50){
              alert("Risk Score is above 50. Do not click on any links in this email: "+showRiskScore)
          } else {
              console.log("risk score under 50: ", riskScoreData.response.risk_score)
          }
      }
      request.send()
      console.log("send sent")
      
   }


};
