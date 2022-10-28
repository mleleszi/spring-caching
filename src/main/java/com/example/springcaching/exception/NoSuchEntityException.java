package com.example.springcaching.exception;

public class NoSuchEntityException extends RuntimeException {
    public NoSuchEntityException(Integer id) {
        super(String.format("No entity with id: %s", id));
    }

    public NoSuchEntityException(String id) {
        super(String.format("No entity with id: %s", id));
    }

    public NoSuchEntityException() {
        super("No such entity");
    }
}
