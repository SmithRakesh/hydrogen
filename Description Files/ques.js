
        document.getElementById("btnback").addEventListener("click", () => {
            location = "index.html"
        })

        window.addEventListener("load", () => {
            let query = window.location.search
            if (query !== "") {
                fetchquesno(query)
            }
            else {
                console.log("No such quesiton with the valid Q number")
            }
        })

        const fetchquesno = async (qsno) => {
            let querys = new URLSearchParams(qsno)
            let id = querys.get('id')
            // console.log(id)
            try {
                var url = `http://localhost:3008/question?id=${id}`
                // console.log(url)
                const res = await fetch(url);
                const data = await res.json();
                displayq(data)
            }
            catch (err) {
                console.log(err)
            }
        }

        function displayq(data) {
            var output = ""
            var count = 0;
            for (i in data) {
                // console.log(data[i].question)
                count = count + 1
                output += `<div class= display>
                        <p> Q  ${data[i].id}: ${data[i].question}</p>
                        <p> Option 1 : ${data[i].option_1}</p>
                        <p> Option 2 : ${data[i].option_2}</p>
                        <p> Option 3 : ${data[i].option_3}</p>
                        <p> Option 4 : ${data[i].option_4}</p>
                        <input oninput="checkans(this)"> Enter correct option Number </input>
                        <br><br>
                        <button onClick="higlight(this)"> SHOW CORRECT ANSWER </button>
                        </div>`
            }
            document.getElementById("display").innerHTML = output
        }

      const higlight = async(e) =>
        {
            let query = window.location.search
            let querys = new URLSearchParams(query)
            let id = querys.get('id')
            // console.log(id)
            try {
                var url = `http://localhost:3008/question?id=${id}`
                // console.log(url)
                const res = await fetch(url);
                const data = await res.json();
                displayans(data)
            }
            catch (err) {
                console.log(err)
            }
        }         
        function displayans(data) {
            var output = ""
            var count = 0;
            for (i in data) {
                // console.log(data[i].question)
                count = count + 1
                output += `<div class= display>
                       
                        <p> Correct Option is : ${data[i].answer}</p>
                        <p> Explanation : ${data[i].explanation}</p>
                       
                        </div>`
            }
            document.getElementById("disans").innerHTML = output
        }

      const checkans = async (e) =>
        {
            console.log(e.value)
            let query = window.location.search
            let querys = new URLSearchParams(query)
            let id = querys.get('id')
        
            try {
                var url = `http://localhost:3008/question?id=${id}`
         
                const res = await fetch(url);
                const data = await res.json();
                console.log(data.answer)
               check(e.value,data)
                }
            catch (err) {
                console.log(err)
            }
            
        }

        function check(e,a)
        {
            for(i in a)
                {
                if(e == a[i].answer)
            {
                console.log("Correct")
                document.getElementById("crct").textContent = "Correct Answer"
            }
            else{
                console.log("wrong")
                document.getElementById("crct").textContent = "Wrong Answer"
            }
             
            }
        }