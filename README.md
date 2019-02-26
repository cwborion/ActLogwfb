# ActLog

An all-in-one place to manage important, personal and often referenced information.

Installation
----

Clone the repository 
```
git clone git@github.com:cwborion/ActLogwfb.git
```

Navigate to the actlog directory in Terminal or Command Line
```
cd actlog
```


Install the dependencies:

```
npm install
```

Run app in browser: 
```
npm start
```

Direct your browser to **localhost:3000**

*When logging out, if console is open in browser, Firebase logs a message as an 'error', but it is not actually an error, but simply a log from firebase. An explanation is outlined here. https://github.com/prescottprue/react-redux-firebase/issues/494 . It in no way affects the functionality of the app and I have not yet drilled down to the core of why it logs that.*