/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { ITodo } from "./types/todotype";
import { getTodo } from "./apis/todos/apistodos";
import { IPhoto } from "./types/phototype";
import { getPhoto, getPhotos } from "./apis/photos/apisphotos";

const AppRoot = () => {
  const getTodoOne = async () => {
    const result: ITodo = await getTodo(3);
    console.log(result);
  };

  const getPhotoOne = async () => {
    const result: IPhoto = await getPhoto(3);
    console.log(result);
  };
  const getPhotoAll = async () => {
    const result: IPhoto[] = await getPhotos();
    result.length;
    console.log(result);
  };

  useEffect(() => {
    getTodoOne();
  }, []);
  return <div></div>;
};

export default AppRoot;
