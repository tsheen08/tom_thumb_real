from csv import reader
import csv
import sys

file = sys.argv[1]

def out_to_tsv(row):
    with open('./output.tsv', 'at') as out_file:
        tsv_writer = csv.writer(out_file, delimiter='\t')
        tsv_writer.writerow(row)

with open('workout.csv', 'r') as read_obj:
    csv_reader = reader(read_obj)
    for row in csv_reader:
        out_to_tsv(row)


sys.stdout.flush();       