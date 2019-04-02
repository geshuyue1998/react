import {ADD_TODO_ITEM,DEL_TODO_ITEM} from './ActionsTypes';
export const add_todo=(value)=>({type:ADD_TODO_ITEM,value:value})//调这个函数直接有返回值
export const del_todo=(value)=>({type:DEL_TODO_ITEM,value:value})//调这个函数直接有返回值
