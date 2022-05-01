const readInfos = async ( baseUrl, apiKey,urlToAnalyse )=>{
    const isValid =  Client.isValidURL(urlToAnalyse);
    console.log("isValid");
    console.log(isValid);
    console.log(baseUrl+apiKey+urlToAnalyse);
    const response =  (isValid ?  await fetch(baseUrl+apiKey+urlToAnalyse):{urlValidity:"Not Valid URL",subjectivity: "Not applied", ploarity: "Not applied", irony:"Not applied", agreement:"Not applied"});
    let ploarity ='No plolarity was provided';
    try {
        const data = isValid ? await response.json():response;
        console.log("Calling Meaningcloud API ...");
        if(data.polarity === 'P+') ploarity='Strongly Positive';
        if(data.polarity === 'P') ploarity='Fairly Positive';
        if(data.polarity === 'NEU') ploarity='Neutral';
        if(data.polarity === 'N') ploarity='Negative';
        if(data.polarity === 'N+') ploarity='Strongly Negative';
        if(data.polarity === 'NON') ploarity='Without Sentiment';
        if(data.polarity === 'Not applied') ploarity='Not applied';
        let formatedReturnedData =  { urlValidity:"Valid URL",subjectivity: data.subjectivity, poloarity: ploarity, irony:data.irony, agreement:data.agreement};
        console.log(formatedReturnedData);
        return await formatedReturnedData;
      } catch (error) {
        console.log("Errors hapemed when calling Meaningcloud API...");
        console.log(error);
      }
}
export { readInfos }