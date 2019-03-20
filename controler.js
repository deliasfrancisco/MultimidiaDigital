$(document).ready(function(){

    const app = require('electron').remote.app;
    const {remote} = require('electron');

    $('#btnCancel').click(function(){
        console.log("Fechar");
        remote.BrowserWindow.getFocusedWindow().close();
    });

    $('#btnCancel').click(function () {
        console.log("Maximizar");
        if (remote.BrowserWindow.getFocusedWindow().isMaximized()){
            remote.BrowserWindow.getFocusedWindow().restore();
        }
        else{
            remote.BrowserWindow.getFocusedWindow().maximize();
        }
    });

    $('#btnCancel').click(function () {
        console.log("Minimizar");
        if (remote.BrowserWindow.getFocusedWindow().isMinimized()){
                remote,BrowserWindow.getFocusedWindow().restore();
        }
        else{
            remote.BrowserWindow.getFocusedWindow().minimize();
        }
    });
    //$('.btn-group').hide();
});