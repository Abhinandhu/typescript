class FacebookProfile {
    private id : number
    private name : string
    private about : string
    private age : number
    private friends : number
    private intro : object[]
    private phoneNo ?: number 
    private email ?: string
    private workPlace ?: string 
    private education ?: string[]// Education
    private dob : string// Date of Birth
    private homeTown ?: string// home town
    private photos ?: string[]// URL of photos
    private videos ?: string[]// URL of videos
   
    private sports ?: string[]// sports
    private likes ?: string[]// likes


        constructor(id : number, name : string, age : number,about : string, friends : number, intro : object[],dob : string, 
            phoneNo ?: number, email ?: string, workplace ?: string , education ?: string[] ,
             homeTown ?: string, photos ?: string[], videos ?: string[], sports ?: string[],likes ?: string[] ){
            this.id = id
            this.name = name
            this.age = age
            this.about = about
            this.friends = friends
            this.intro = intro
            this.phoneNo = phoneNo
            this.email = email
            this.workPlace = workplace
            this.education = education
            this.dob = dob
            this.homeTown = homeTown
            this.photos = photos
            this.videos = videos
            
            this.sports = sports
            this.likes = likes
        }
        //end of constructor

        //getters

        getId = ()=>{
            return this.id
        }
        getName = ()=>{
            return this.name
        }
        getAge = ()=>{
            return this.age
        }
        getAbout = () => {
            return this.dob
        }
        getFriends = () => {
            return this.friends
        }
        getIntro = () => {
            return this.intro
        }
        getPhoneNo = () => {
            if(this.phoneNo){
                return this.phoneNo
            }
            else
            return null
        }
        getEmail = () => {
            if(this.email){
                return this.email
            }
            else
            return null
        }
        getWorkPlace = () => {
            if(this.workPlace){
                return this.workPlace
            }
            else
            return null
        }
        getEducation = () => {
            if(this.education){
                return this.education
            }
            else
            return null
        }
        getHomeTown = () => {
            if(this.homeTown){
                return this.homeTown
            }
            else
            return null
        }
        getDob= () => {            
            return this.dob
        }
        getHometown = () => {
            if(this.homeTown){
                return this.homeTown
            }
            else
            return null
        }
        getPhotos = () => {
            if(this.photos){
                return this.photos
            }
            else
            return null
        }
        getVideos = () => {
            if(this.videos){
                return this.videos
            }
            else
            return null
        }
      
        getSport = () => {
            if(this.sports){
                return this.sports
            }
            else
            return null
        }
        getLikes = () => {
            if(this.likes){
                return this.likes
            }
            else
            return null
        }
      
}

let Vinay = new FacebookProfile(
    11111,
    "Abhinandhu",
    21,
    "live the life you love, love the life you live",
    222222,
    [
        {
          Works_At: "Bosch",
          Studied_At : "cvr college of engineering",
          
          Lives_In : "Hyderabad",
            
        }
    ],
    "22/03/1997",
    3333333333,
    "abhinandhu2203@gmail.com",
    "Bosch",
    ["Ssri Chaitanya", "CVR"],
    "Hyderabad",    ["https://xyz","https://abc"],
    ["https://www.youtube.com"],
    
    ["Cricket", "Football", "Table Tennis"],
    ["Music", "Coding"]
);

//displaying info 
console.log("Profile Id : ",Vinay.getId());
console.log("Profile Name : ",Vinay.getName());
console.log("Age : ", Vinay.getAge());
console.log("About Me : ",Vinay.getAbout());
console.log("Total Friends : ",Vinay.getFriends());
console.log("Intro : ",Vinay.getIntro());
console.log("Phone Number : ",Vinay.getPhoneNo());
console.log("Email Id : ",Vinay.getEmail());
console.log("WorkPlace : ",Vinay.getWorkPlace());
console.log("Education : ",Vinay.getEducation());
console.log("BirthDay : ",Vinay.getDob());
console.log("Hometown : ",Vinay.getHometown());
console.log("Photos : ",Vinay.getPhotos());
console.log("Videos : ",Vinay.getVideos());
console.log("Sports : ",Vinay.getSport());
console.log("Likes : ",Vinay.getLikes());


