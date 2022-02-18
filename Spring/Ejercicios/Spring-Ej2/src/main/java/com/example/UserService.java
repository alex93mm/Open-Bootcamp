package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserService {

    private NotificationService notificacion;

    public UserService(){}
    @Autowired
    public UserService(NotificationService notification){
        this.notificacion = notification;
    }

    public NotificationService getNotificacion() {
        return notificacion;
    }

    public void setNotificacion(NotificationService notificacion) {
        this.notificacion = notificacion;
    }
}
