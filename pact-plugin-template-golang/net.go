package main

import (
	"fmt"
	"net"
	"os"
	"strconv"
)

// GetFreePort Gets an available port by asking the kernal for a random port
// ready and available for use.
func GetFreePort() (int, error) {
	var port = 0
	fmt.Println("User provided port:", os.Getenv("PORT"))
	port, err := strconv.Atoi(os.Getenv("PORT"))
	if err == nil {
		fmt.Println("userSetPort:", port)
		return port, nil
	}
	addr, err := net.ResolveTCPAddr("tcp", "127.0.0.1:0")
	if err != nil {
		return 0, err
	}

	l, err := net.ListenTCP("tcp", addr)
	if err != nil {
		return 0, err
	}
	port = l.Addr().(*net.TCPAddr).Port
	defer l.Close()
	return port, nil
}
