console.log("hello")

const alpha = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function encrypt() {
    console.log("Encrypt")
    // get message text value
    let msg = document.getElementById("messageInput").value;
    console.log(msg);
    //Get key value
    let keyValue = document.getElementById("key").value
    console.log(keyValue);
    //create empty result string
    let resultString = "";

    //look throught message characters

        //Get the current character(.CharAt(i))
        for (let i = 0; i < msg.length; i++) {
            let char = msg.charAt()
        }
        // Convert to lowercase(.toLowerCase())

        //Convert to a number (alpha.indexOf(currentChar))

        //Apply formula 

        //Convert new char number into a character alpha[encryptedVaule]

        //Add-encrypted character to a result string

    //Set encrypted message result text on screen
}

function decrypt() {
    console.log("Decrypt")
}