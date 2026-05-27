class S {
    login(name?: string, password?: string): string {
        if(name && password){
            return "Student Login"
        }
        else{
            return "Student Not Allowed"
        }
    }
    result(marks: number): string {
        if(marks>33){
            return "Pass"
        }
        else{
            return "Fail"
        }
    }
}

const a = new S()
console.log(a.result(24))
console.log(a.login())