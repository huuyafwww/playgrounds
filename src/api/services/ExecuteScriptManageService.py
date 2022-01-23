class ExecuteScriptManageService:

    def __init__(self, runFile, logFile):
        self.runFile = runFile
        self.logFile = logFile

    def write(self, data):
        with open(self.runFile, "w") as file:
            file.write( data )

    def getLog(self):
        with open(self.logFile, "r") as file:
            return file.read()
