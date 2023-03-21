import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import { RouteProps, redirect } from 'react-router-dom';

interface Props {
    isLoggedin: boolean;
}

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
    const AuthComponent: React.FC<P & Props> = (props: P & Props) => {
      const { isLoggedin, ...rest } = props;
  
      const ComponentToRender: React.ComponentType<P> = isLoggedin 
      ? Component 
      : ((props: P) => <Redirect to="/login" {...props as RouteProps} />);
  
      return <ComponentToRender {...rest as P} />;
    };
    return AuthComponent;
};