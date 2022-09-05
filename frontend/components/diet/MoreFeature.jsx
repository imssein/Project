import React from 'react';
import Link from 'next/link';
import { BsPencil, BsTrash } from "react-icons/bs";
import DietService from '../../services/diet.service';
import {useRouter} from 'next/router';

function MoreFeature({id}) {
    const router = useRouter();

    function handleDelete() {

        DietService.deleteDiet(id).then(
          () => {
            alert("식단 삭제");
            router.push('/dietPage')
          }, 
          (error) => {
            console.log(error)
          }
        );
      }

    return (
          <div className="border float-right  ">
      <div className="flex px-8 py-4 border-b">
        <Link href={`/editDiet/${id}`}>
        <button className="flex">
          <p className="mr-4 my-auto">수정하기</p> <BsPencil size={20}/>
        </button>
        </Link>
        
       
      </div>
      <div className="flex px-8 py-4 border-b text-red-500">
        <button className="flex" onClick={handleDelete}>
        <p className="mr-4 my-auto">삭제하기</p> <BsTrash size={20}/>
        </button>
      </div>
    </div>
    );
}

export default MoreFeature;