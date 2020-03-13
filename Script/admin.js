var serverURL = "http://restclass.azurewebsites.net/API/";

var Items = [];

function init() {
    console.log("Admin Page");
}

window.onload = init;

class Item {
    constructor(code, title, price, description, category, image) {
        this.code = code;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.user = "Efren";
    }
}

function clearForm() {
    $("#ItemCode").val("");
    $("#ItemTitle").val("");
    $("#ItemPrice").val("");
    $("#ItemDescription").val("");
    $("#ItemCategory").val("");
    $("#ItemImage").val("");
    $("#ItemCode").focus();
}



function Register() {
    console.log("Current Items" + Items.length);

    var code = $("#ItemCode").val();
    var title = $("#ItemTitle").val();
    var price = $("#ItemPrice").val();
    var description = $("#ItemDescription").val();
    var category = $("#ItemCategory").val();
    var image = $("#ItemImage").val();

    if (code == "") {
        $("#ItemCode").focus();

    } 
    else if
    (title == "") {
        $("#ItemTitle").focus();

    } 
    else if
    (price == "") {
        $("#ItemPrice").focus();

    } 
    else if
    (description == "") {
        $("#ItemDescription").focus();

    }  
    else if
    (category == ""){
        $("#ItemCategory").focus();

    } 
    else if
    (image == "") {
        $("#ItemImage").focus();

    }
    else {
        var newItem = new Item(code, title, price, description, category, image);

        Items.push(newItem);
        var jsonString = JSON.stringify(newItem);

        console.log(newItem);
        console.log(jsonString);

        $.ajax({
            url: serverURL + "points",
            type: "POST",
            contentType: "application/json",
            data: jsonString,
            success: function (response) {
                console.log("it works", response);
                clearForm();
                $("#AlertMessage").removeClass("hidden");
    
                setTimeout(function () {
                    $("#AlertMessage").addClass("hidden");
                }, 5000)
    
                clearForm();
            },
            error: function (errorDetails) {
                console.log(errorDetails);
            }
    
        });

        // Items.push(
        //     {
        //         code: code,
        //         title: title,
        //         price: price,
        //         description: description,
        //         category: category,
        //         image: image,
        //     }
        // );

    }

    

}


$("#btnRegister").on("click", function () {
    Register();
});

function solveHW() {
    var data = [
        {
            age: 28,
            name: "Eli",
            color: "Orange"
        },
        {
            age: 35,
            name: "Zach",
            color: "Blue"
        },
        {
            age: 26,
            name: "LArry",
            color: "Blue"
        },
        {
            age: 37,
            name: "Ed",
            color: "Blue"
        },
        {
            age: 30,
            name: "Jeremy",
            color: "Peach"
        },
        {
            age: 28,
            name: "Pavel",
            color: "Purple"
        },
        {
            age: 33,
            name: "Chad",
            color: "Red"
        }
    ]
}

//


