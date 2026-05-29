import {formatDistanceToNow} from 'date-fns'

//created the custom export function to make it a
//centralised timeline
export function getTheTime (whenDate) {
    return formatDistanceToNow(whenDate, {
        addSuffix:true
    })
}