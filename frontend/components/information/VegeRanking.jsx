import Image from 'next/image';
import React from 'react';

const data = [
    {
        id:1,
        title: "씨앗",
        src: "seed.png"
    }, 
    {
        id:2,
        title: "새싹",
        src: "sprout.png"
    }, 
    {
        id:3,
        title:"열매",
        src: "cherry.png"
    },
    {
        id:4,
        title: "나무",
        src: "tree.png"
    }
]
function VegeRanking(props) {
    return (
        <div>
            <div className='text-center font-semibold text-lg'>채식 기록 개수에 따라 단계를 나눕니다.</div>
                <div>
                    {data && data.map((item) => (
                        <div key={item.id}>
                            <Image src={`/images/${item.src}`} width="50" height="50" alt="채식 단계" />
                        </div>
                    ))}
              씨앗단계: 30개 이하
              새싹단계: 60개 이하
              열매단계: 120개 이하
              나무단계: 120개 이상

            </div>
        </div>
    );
}

export default VegeRanking;