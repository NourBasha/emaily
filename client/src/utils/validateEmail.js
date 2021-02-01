
const RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;


const validateEmails =  (emails) => {

    /// non valid emails 
    const invaildEmails = emails
    .split(',')
    .map(email=> email.trim())
    .filter(email => RE.test(email) === false);

    if(invaildEmails.length){
        return `These Emails Are Not Valid: ${invaildEmails}`;
    }
    return null;
}

export default validateEmails;