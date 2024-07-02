import menus from '../data/menu-detail.json'

/* json 파일로부터 전체 메뉴 리스트 반환해보기 */ 
export function getMenuList() {

    /* json 으로 파싱 된 데이터를 반환한다. */ 
    return menus;


}
export function getMenuDetail(menuCode) {

    console.log("detail 페이지 에서 넘어오는 메뉴 코드 값: " , menuCode);
    /* 
        pathVariable 에서 꺼내오는 값은 String => 문자열이다. 
        파싱된 데이터에서 꺼낸 객체의 menuCode 는 숫자이므로 넘겨받은 값을 
        parseInt 파싱처리를 해줘야 한다.     
    */ 
    console.log(typeof menuCode); 

    /*  
        menus 배열에서 filter 를 사용해서 콜백함수가 true 를 반환하는 요소만 
        다시금 배열을 만들어줘서 return 해준다
    */
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
} 

export function searchMenu(searchMenuName){

    /* 
        filter, map, match 
        match : 포함 여부에 따라서 인수값이 포함되어 있으면 객체?를 반환해준다. 
    */ 

    // match -> 멸
    return menus.filter(menu => menu.menuName.match(searchMenuName));

}