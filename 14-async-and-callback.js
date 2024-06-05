<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style> 
    .poster {
        width: 300px;
    }
    td {
        width: 300px;
        text-align: center;
        font-size: 25px;
    }
    </style>
    <!-- jQuery -->
    <script src = "script/jquery-3.7.1.js"></script>
    <script>
        // 페이지 초기화
        $(document).ready(event => {
            // #btnCallSnippet에 click 이벤트
            $("#btnCallSnippet").on("click", event => {
                // Ajax로 snippet.html 호출
                // option을 JavaScript 객체로 전달
                $.ajax({
                    url: "snippet.html",    // 호출할 URL
                    type: "GET",    // 요청의 타입
                    // data:        // 서버로 전송할 데이터
                    dataType: "text",  // 응답의 데이터 타입
                    success: function(response) {   // 성공 콜백
                        // response -> 응답정보
                        console.log(response);
                        $("#info").html(response);
                    },
                    error: function(request, status, error) {
                        // request: 요청 정보
                        // status: 상태 정보(200: 성공, 400: 요청에 문제, 500: 서버 문제)
                        // error: 에러의 상세 정보
                        console.error(error);
                    }
                });
            });
            // #btnCallMovies에 클릭 이벤트
            $("#btnCallMovies").on("click", event => {
                // localhost:3000/movies -> json
                $.ajax({
                    url: "http://localhost:3000/movies",
                    type: "GET",
                    dataType: "json",
                    success: function(response) {
                        console.log(response);
                        $("#list").html(response);  //  JSON

                        // 영화 목록 정보
                        const movies = response.movies;
                        console.log(movies);    // Array

                        // loop
                        
                        // for (let i = 0; i< movies.length; i++) {
                        //     // 개별 영화 정보 받아오기 
                        //     let movie = movies[i];
                        //     console.log(movie);

                        //     // 영화 정보
                        //     let title = movie.title;
                        //     let director = movie.director;
                        //     let poster = "http://localhost:3000/images/" + movie.image;
                        //     console.log(title, director, poster);

                        //     // tr 요소를 생성 -> 정보 연결 -> table#list의 자식 요소로 추
                        //     const tr = $("<tr>");   // tr 요소 생성
                        //         tr.html(`
                        //             <td><img src = "${poster}" class = "poster"></td>
                        //             <td>${title}</td>
                        //             <td>${director}</td>`);

                        //     // 부모에 자식으로 추가
                        //     $("#list").append(tr);
                                                          
                        // }

                        // 실습:
                        // http://localhost:3000/movies/12
                        // - 개별 영화 정보를 ajax로 받아와서 
                        // - HTML에 동적으로 생성하여 DOM에 추가하는 코드

                        // - 개별 영화 클릭하면 새창에
                        // - 영화 상세 정보를 받아와서 표시

                        movies.forEach(movie => {
                            const row = `<tr>
                                <td>${movie.id}</td>
                                <td><a href="https://namu.wiki/w/${movie.title}" target="_blank">${movie.title}</a></td>
                                <td>${movie.year}</td>
                                <td><img src = "http://localhost:3000/images/${movie.image}" alt = "&${movie.title} 이미지" width="300"</td>
                                <td>${movie.director}</td>
                                </tr>`;
                                $("#list").append(row);
                        })
                    },
                    error: function(request, status, error) {
                        console.error(error);
                    }
                })
            })
        });

    </script>

</head>
<body>
    <button id = "btnCallSnippet"> HTML 조각 불러오기 </button>
    <button id = "btnCallMovies"> 영화 목록 불러오기 </button>
    <!-- HTML 조각 불러와서 렌더링할 영역 -->
    <div id = "info">
        
    </div>
    <!-- JSON을 받아와서 동적으로 만들 테이블 -->
    <table id = "list" border = "1" width = "1500">
    </table>

</body>
</html>