interface UserInfo {
    username : string;
    password : string;
    age? : number;
    address?: string;
}
const userInfo: UserInfo = {
    username: 'powerku@naver.com',
    password: '1234'
};

console.log(userInfo);