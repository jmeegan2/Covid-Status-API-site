

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

   

    function init(){
        var url = "https://api.covid19api.com/summary"

        var data = ''

        $.get(url,function(data){
            console.log(data.Global)

            data = ` 
            <td>${data.Global.TotalConfirmed}</td>
            <td>${data.Global.TotalDeaths}</td>
            <td>${data.Global.NewDeaths}</td>

            `

            $("#data").html(data)
        })
    }

   

function refreshData(){
        clearData()
        init()
    }

    function clearData() {
        $("#data").empty()
        init()
    }
 