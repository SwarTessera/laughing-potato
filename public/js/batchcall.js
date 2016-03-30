function runbat() {
		WshShell = new ActiveXObject("WScript.Shell");
		WshShell.Run("C:/Projects/BE/laughing-potato/public/batch/callmath.bat", 1, false);
        }