import React from 'react';
import classes from './users.module.scss';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../../api/api';

let Users = (props) => {

    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={classes.pages}>
            {pages.map(e => {
                return <span    onClick={() => { props.onPageChanged(e) }} 
                                className={props.currentPage === e && classes.activePage}>{e}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img    src={u.photos.small != null ? 
                                u.photos.small : 
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMcHp3yfT5tduDCfT-Raz6u0N1x4BWBbb2OCwKMN2sqyoEBXM_'} />
                    </NavLink>
                </div>
                <div>
                    {   
                        u.followed ? 
                        <button onClick={() => {
                            usersAPI.unfollowUser(u.id).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            })
                        }}>Unfollow</button> : 
                        <button onClick={() => {
                            usersAPI.followUser(u.id).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                            })
                        }}>follow</button>
                    }
                </div>
            </span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
            </span>
        </div>)
        }
    </div>
}

export default Users