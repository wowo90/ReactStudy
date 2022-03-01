import React, { useState } from 'react';

const Login = () => {
    const [Address, SetAddress] = useState('Login');

    const CheckUnlocked = async () => 
    {
        const ID = window.sessionStorage.getItem('ID');
        // 지갑이 연결되어있다면 true, 아니라면 false를 리턴합니다.
        const isUnlock = await window.klaytn._kaikas.isUnlocked();

        if (ID !== null && isUnlock === true) {
            SetAddress(ID);
        }
    }

    CheckUnlocked();

    const kaikasLogin = async () => {
        console.log("On Login Function");
        const wallet = await window.klaytn.enable();
        const version = await window.klaytn.networkVersion;
        const selectedId = await window.klaytn.selectedAddress;
        if (selectedId !== 'undefined') {
            console.log("Version :" + version);
            console.log("ID : " + selectedId);
            SetAddress(selectedId);
            //쿠키 세션에 Id값 저장 
            //추후에, ID에 맞는 닉네임 보여지게끔
            window.sessionStorage.setItem('ID', selectedId);
        }
    }

    //설치되어있는 실제 카이카스 지갑이 로그인이 되어있는지를 확인
    const onClickKaikas = () => {
        if (window.klaytn !== 'undefined') {
            if (window.klaytn.isKaikas) {
                //로그인/회원가입 진행                
                const ID = window.sessionStorage.getItem('ID');
                if (ID !== null) 
                {
                    //로그아웃
                    console.log("kaikas Out");
                    window.sessionStorage.removeItem('ID');
                    SetAddress('Login');
                }
                else 
                {
                    console.log("kaikas Login!");
                    kaikasLogin();
                }
            }
            else {
                alert("kaikas를 다운받아주세요");
                //카이카스 설치 팝업 
                const provider = window['klaytn']
                console.log("Kaikas user detected");
                console.log(provider);
                /*
                    //카이카스 계정이 변경 됐는지 확인하는 함수
                    //기존에 계정과 다르다면, 로그아웃 처리를 해야한다
                    klaytn.on('accountsChanged', function(accounts) {
                    // Your code
                    })                
                */
            }
        }
    }

    return (
        <form>
            <button onClick={() => onClickKaikas()}>{Address}</button>
        </form>
    )
}

export default Login;