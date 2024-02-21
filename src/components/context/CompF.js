import React from 'react'
import { UserContext, ChannelContext } from '../../App'

function CompF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return ( 
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>User context value {user} , Channel context value {channel} Returning values but without use of USECONTEXT Hook </div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default CompF