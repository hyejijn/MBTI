// function start(){
//     $('.start').hide();
//     $('.question').show();
// }

// let num=1;

let q = {
    1: {"title" : "문제1", "type" : "IE","A":"I","B":"E"},
    2: {"title" : "문제2", "type" : "IE","A":"I","B":"E"},
    3: {"title" : "문제3", "type" : "IE","A":"I","B":"E"},
    //
    4: {"title" : "문제4", "type" : "SN","A":"S","B":"N"},
    5: {"title" : "문제5", "type" : "SN","A":"S","B":"N"},
    6: {"title" : "문제6", "type" : "SN","A":"S","B":"N"},
    //
    7: {"title" : "문제7", "type" : "TF","A":"T","B":"F"},
    8: {"title" : "문제8", "type" : "TF","A":"T","B":"F"},
    9: {"title" : "문제9", "type" : "TF","A":"T","B":"F"},
    //
    10: {"title" : "문제10", "type" : "JP","A":"P","B":"J"},
    11: {"title" : "문제11", "type" : "JP","A":"P","B":"J"},
    12: {"title" : "문제12", "type" : "JP","A":"P","B":"J"},

}

let result ={
    "ISTJ" : {"resultTitle": "SNS 아카이버","explain":"친밀한 친구들과 따뜻한 일상을 공유하는 타입입니다. 화려하지 않지만 정성 가득한 게시물로 소중한 사람들과 추억을 나눕니다. 친구의 생일이나 기념일을 잊지 않고 챙기며, 오랜 관계를 소중히 여깁니다.","img":"assets/images/1.jpg"},
    "ISFJ" : {"resultTitle": "SNS 다이어리스트","explain":"친밀한 친구들과 따뜻한 일상을 공유하는 타입입니다. 화려하지 않지만 정성 가득한 게시물로 소중한 사람들과 추억을 나눕니다. 친구의 생일이나 기념일을 잊지 않고 챙기며, 오랜 관계를 소중히 여깁니다.","img":"assets/images/2.jpg"},
    "INFJ" : {"resultTitle": "SNS 영감 전도사","explain":"의미 있는 콘텐츠만 엄선해서 공유하는 타입입니다. 심오한 명언, 영감을 주는 예술 작품, 사회적 메시지가 담긴 게시물을 좋아합니다. 피드는 적지만 한 번 올리면 많은 사람들에게 깊은 인상을 남깁니다.","img":"assets/images/3.jpg"},
    "INTJ" : {"resultTitle": "SNS 전략가","explain":"목적이 분명한 SNS 활동을 합니다. 자신의 전문 분야나 관심사에 대한 통찰력 있는 콘텐츠를 제공하며, 불필요한 소통은 최소화합니다. 알고리즘을 분석하고 최적의 포스팅 시간대를 계산하는 타입입니다.","img":"assets/images/4.jpg"},

    "ISTP" : {"resultTitle": "SNS 기술자","explain":"자신이 만든 작품이나 프로젝트를 공유하는 것을 좋아합니다. 말보다는 행동으로 보여주는 타입으로, 과정보다는 결과물을 중심으로 포스팅합니다. 트렌드에 연연하지 않고 자신만의 독특한 콘텐츠를 만듭니다.","img":"assets/images/5.jpg"},
    "ISFP" : {"resultTitle": "SNS 아티스트","explain":"시각적으로 아름다운 콘텐츠를 만들어내는 타입입니다. 독특한 감성과 미적 감각이 돋보이는 피드를 유지하며, 자신만의 시선으로 포착한 일상의 예술을 공유합니다. 말은 적지만 이미지로 많은 것을 표현합니다.","img":"assets/images/6.jpeg"},
    "INFP" : {"resultTitle": "SNS 시인","explain":"자신의 내면세계와 감정을 섬세하게 표현하는 타입입니다. 아름다운 글귀와 의미 있는 순간들을 포착해 공유하며, 가끔은 자작시나 에세이를 올립니다. 좋아하는 문화 콘텐츠에 대한 깊은 감상평을 남기기도 합니다.","img":"assets/images/7.jpg"},
    "INTP" : {"resultTitle": "SNS 사색가","explain":"흥미로운 아이디어와 지적 호기심을 자극하는 콘텐츠를 공유합니다. 새롭게 배운 개념이나 이론에 대한 자신만의 해석을 올리고, 댓글에서 깊이 있는 토론을 즐깁니다. SNS를 지식 교류의 장으로 활용합니다."},

    "ESTJ" : {"resultTitle": "SNS 매니저","explain":"효율적이고 체계적인 SNS 활동을 보여주는 타입입니다. 일관된 콘텐츠와 정확한 정보 전달을 중요시하며, 팀 프로젝트나 이벤트를 주도적으로 조직하고 홍보합니다. 스케줄에 맞춰 정확히 포스팅합니다."},
    "ESFJ" : {"resultTitle": "SNS 커뮤니티 빌더","explain":"사람들과의 연결을 중시하는 타입입니다. 모임, 이벤트, 축하 행사 등을 활발히 공유하고, 댓글로 따뜻한 소통을 이어갑니다. 친구들의 생일과 기념일을 빠짐없이 챙기며, 공동체 의식을 강화합니다."},
    "ENFJ" : {"resultTitle": "SNS 인플루언서","explain":"사람들에게 긍정적인 영향을 주는 콘텐츠를 만드는 타입입니다. 동기부여, 자기계발, 사회적 가치를 담은 메시지를 전하며, 팔로워들과 진정성 있는 소통을 통해 깊은 유대감을 형성합니다."},
    "ENTJ" : {"resultTitle": "SNS CEO","explain":"목표 지향적이고 전략적인 SNS 활동을 하는 타입입니다. 자신의 전문성과 리더십을 보여주는 콘텐츠를 제작하며, SNS를 자기 브랜딩과 네트워킹의 도구로 활용합니다. 영향력 있는 인맥과 적극적으로 소통합니다."},

    "ESTP" : {"resultTitle": "SNS 액션 히어로","explain":"활현재 진행형인 짜릿한 경험을 실시간으로 공유하는 타입입니다. 도전적인 액티비티, 여행, 파티 등 흥미진진한 순간들을 스토리와 릴스로 생생하게 전달합니다. 댓글과 DM에 빠르게 반응하며 활발하게 소통합니다."},
    "ESFP" : {"resultTitle": "SNS 엔터테이너","explain":"자신의 매력과 재능을 마음껏 뽐내는 타입입니다. 유쾌한 댄스 챌린지, 재미있는 일상 브이로그, 트렌디한 패션 룩북 등 다양한 콘텐츠로 팔로워들을 즐겁게 합니다. 댓글과 소통을 통해 에너지를 얻습니다."},
    "ENFP" : {"resultTitle": "NS 트렌드세터","explain":"열정적이고 창의적인 콘텐츠로 주목받는 타입입니다. 새로운 트렌드를 빠르게 캐치하고 자신만의 색깔을 입혀 재해석합니다. 다양한 분야에 관심을 보이며, 색다른 시도와 실험을 두려워하지 않습니다."},
    "ENTP" : {"resultTitle": "SNS 디베이터","explain":"논쟁적이고 도발적인 주제로 관심을 끄는 타입입니다. 기존의 생각에 도전하는 질문을 던지고, 댓글에서 열띤 토론을 이끌어냅니다. 위트 있는 밈과 패러디로 팔로워들의 지적 호기심을 자극합니다."},
}

function start(){
    $('.start').hide();
    $('.question').show();
    next();
}

let num=1;

$('#A').click(function(){
    let type = $("#type").val();
    let preValue =$("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);
     next();
})

$('#B').click(function(){
    let type = $("#type").val(); // 추가
    next();
})


function next(){
    if(num==13){
        $(".question").hide();
        $(".result").show();

        let mbti = ""; // 초깃값
        mbti += $("#IE").val() >2 ? "I" : "E"; //삼항연산자
        mbti += $("#SN").val() >2 ? "S" : "N";
        mbti += $("#TF").val() >2 ? "T" : "F";
        mbti += $("#JP").val() >2 ? "P" : "J";
        $("#result_img").attr("src",result[mbti]["img"]);

        const userResult = result[mbti];

        $("#resultTitle").html(result[mbti]["resultTitle"]);
        $("#explain").html(result[mbti]["explain"]);
    } else{
        $(".progress-bar").attr('style','width: calc(100% / 12 * ' + num + ');');
        //width: calc(100/12*1%)
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);


        console.log($("IE"),$("#IE").val());
        console.log($("SN"),$("#SN").val());
        console.log($("TF"),$("#TF").val());
        console.log($("JP"),$("#JP").val());
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num ++;

    }
}



