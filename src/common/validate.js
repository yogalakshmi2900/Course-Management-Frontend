export function Emailvalidate(email){
    const regemail=/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;
    if(regemail.test(email)){
        return 1;
    }
    else {
        return 0;
    }
}

export function Validpassword(password){
  const pattern         = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})");
  const passwordvalid   = pattern.test(password)
  return passwordvalid
}

export function Facebookvalidate(facebook_link)
{
    const facebook_pattern= /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/;
    const isvalidFacebooklink=facebook_pattern.test(facebook_link);
    return isvalidFacebooklink;
}

export function Twittervalidate(twitter_link)
{
    const twitter_pattern=/^(https?:\/\/)?((w{3}\.)?)twitter.com\/.*/;
    const isvalidTwitterlink=twitter_pattern.test(twitter_link);
    return isvalidTwitterlink;
}

export function Googleplusvalidate(googleplus_link)
{
    const googleplus_pattern= /plus\.google\.com\/.?\/?.?\/?([0-9]*)/;
    const isvalidGooglepluslink=googleplus_pattern.test(googleplus_link);
    return isvalidGooglepluslink;
}

export function Phonenumber(number){
  const phoneno = /^\d{10}$/;
  if(phoneno.test(number)){
      return 1;
  }else{
      return 0;
  }
}

export function Imagevalidation(logo){
  const fileInfo     = logo;
  const fileType     = fileInfo.type;
  const type         = fileType.split('/');
  if(type[1] ==='jpg' || type[1] ==='jpeg' || type[1] === 'png'){
    return 1;
  }else{
    return 0;
  }
}
export function Zip(zip){
  const zippattern = /^\d{5}[-\s]?(?:\d{4})?$/;
  const patternnumner=/(^\d{6}$)|(^\d{6}-\d{4}$)/;
  if((zippattern.test(zip))||(patternnumner.test(zip))){
      return 1;
  }else{
      return 0;
  }
}
export function Hostvalid(host){
  const pattern                  = /^\w+\.\w+\.[a-zA-z]{1,3}$/    //xxx.domain.in/com/...
  const hostnamevalid            = pattern.test(host)
  return hostnamevalid
}
export function Portvalid(port){  //takes port number with in the range of 1-65535
  const patt                     = /^((((([1-9])|([1-9][0-9])|([1-9][0-9][0-9])|([1-9][0-9][0-9][0-9])|([1-6][0-5][0-5][0-3][0-5])))))$/   //range from (1-65535)
  const postnamevalid            = patt.test(port)
  return postnamevalid
}