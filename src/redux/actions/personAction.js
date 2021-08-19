import {ADD_PERSON} from "../constant";

/**
 *
 * @param personObj
 * @returns {{data, type: string}}
 */
export const addPerson = (personObj) => {
    console.log("123")
    return {
        type: ADD_PERSON,
        data: personObj
    }
}