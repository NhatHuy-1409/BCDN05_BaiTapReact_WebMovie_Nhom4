import { Fragment, useEffect } from "react"
import { Redirect, Route } from "react-router-dom"
import { USER_LOGIN } from "../../util/setting/setting"

const CheckoutTemplate = (props) => {
    useEffect(() =>{
        window.scrollTo(0, 0);
      })
    const { Component, ...restProps } = props
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/login' />
    }
    return <Route exact path={restProps.path} render={(propsRoute) => {
        return <Fragment>
            <Component {...propsRoute} />
        </Fragment>
    }} >

    </Route>
}
export default CheckoutTemplate