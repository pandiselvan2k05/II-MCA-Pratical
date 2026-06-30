import pandas as p

def CSV():
    df = p.read_csv('sample.csv')
    Implement(df)

def UserInput():
    n = int(input("Enter the No of Element in DataFrame : "))
    name = []
    mark = []
    rollno = [] 
    for i in range(n):
        na = input("Enter the Name : ")
        ma = int(input("Enter the Mark : "))
        rol = input("Enter the RollNumber : ")
        name.append(na)
        mark.append(ma)
        rollno.append(rol)
    data = {
        "Name" : name,
        "Mark" : mark,
        "Roll Number ":rollno
    }
    df = p.DataFrame(data)
    Implement(df)

def Implement(df):
    print("1.Head Row\n2.Tail Row\n3.Specfic Head and Tail Row\n4.Column Selction\n5.Add New Column\n6.Filter Data\n7.Extra\n8.Exit")
    while True:
        ch = int(input("Enter Your Choice : "))
        match ch:
            case 1:
                print(f"Top Head Row :\n {df.head()}")
            case 2:
                print(f"Top Tail Row :\n {df.tail()}")
            case 3:
                h = int(input("Enter the No Selection Row : "))
                print(f"Head Row :\n {df.head(h)}")
                print(f"Tail Row :\n {df.tail(h)}")
            case 4:
                s = input("Enter Specific Column : ")
                print(f"Column :\n {df[s]}")
            case 5:
                da = []
                ne = input("Enter the New Data Element Name : ")
                n = int(input("Enter the no of Data Add : "))
                for i in range(n):
                    data = input("Enter the Data : ")
                    da.append(data)
                df[ne] = da 
                print(f"New Data Record :\n {df}")
            case 6:
                ma = int(input("Enter the Mark Grather then to Filter : "))
                print(f"Filter :\n {df[df["Mark"]>ma]}")
            case 7:
                print("More than Method : ")
                print("\t------------------ DataFrame Information ------------------ ")
                print(df.info())      
                print("\t------------------ DataFrame Describe ------------------ ")
                print(round(df.describe(),2)) 
                print("\t------------------ DataFrame Shape ------------------")
                print(df.shape)
            case 8:
                break 

def Main():
    print("1.CSV File\n2.Manual Entery")
    ch = int(input("Enter Your Choice : "))
    match ch:
        case 1:
            CSV()
        case 2:
            UserInput()

Main()  