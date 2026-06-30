import pandas as pd
import numpy as np
def dataframe():
    df = pd.read_csv('sample.csv')
    Cal(df["Mark"])
def Cal(df):
    df = pd.Series(df)
    print("1.Mean\n2.Median\n3.Mode\n4.Variance\n5.Standard Deviation\n6.Min and Max\n7.Quantile\n8.All Summary\n9.Exit")
    while(True):
        ch = int(input("Enter Your Choice : "))
        match ch:
            case 1:
                print(f"Mean : {round(df.mean(),2)}")
            case 2:
                print(f"Median : {round(df.median(),2)}")
            case 3:
                print(f"Mode : {round(df.mode(),2)}")
            case 4:
                print(f"Variance : {round(df.var(),2)}")
            case 5:
                print(f"Standard Deviation : {round(df.std(),2)}")
            case 6:
                print(f"Min : {df.min()}")
                print(f"Max : {df.max()}")
            case 7:
                print(f"Quantile of 50% : {df.quantile(0.5)}")
                print(f"Quantile of 75% : {df.quantile(0.75)}")
            case 8:
                print(f"All Summary : \n {round(df.describe(),2)}")
            case 9:
                break
def UserInput():
    n = int(input("Enter the Number of Element : "))
    arr = np.zeros(n)
    for i in range(n):
        arr[i] = int(input(f"Enter the Array Element [{i}]"))
    Cal(arr)
def Main():
    print("1.CSV File\n2.Manual Entery")
    ch = int(input("Enter Your Choice : "))
    match ch:
        case 1:
            dataframe()
        case 2:
            UserInput()
Main()