<!doctype html>
<html dir="ltr" lang="fr">
<head>
    <meta charset="UTF-8">
    <title>  nb  #{{str_pad($emp->id, 9, "0", STR_PAD_LEFT)}}</title>

    <style type="text/css">
        @page {
            margin: 0px;
        }
        body {
            margin: 0px;
            font-family: 'cairo', sans-serif;

        }
        * {
            letter-spacing: -3px !important;
            font-family: 'cairo', sans-serif;
            direction: ltr;
            text-align: left !important;
        }
        a {
            color: #fff;
            text-decoration: none;
        }
        table {
            font-size: x-small;
        }
        tfoot tr td {
            font-size: x-small;
        }
        .invoice table {
            margin: 15px;
        }
        .invoice h3 {
            margin-left: 15px;
        }
        .information {
            background-color: #4CAF50;
            color: #FFF;
        }
        .information .logo {
            margin: 5px;
        }
        .information table {
            padding: 10px;
        }


    </style>
    <style>
        body {
            padding-left: 0 !important;
            letter-spacing: 0px !important;

        }
        .expenses_sales {
            border-collapse: collapse;
            width: 100%;
        }

        .expenses_sales td, .expenses_sales th {
            border: 1px solid #ddd;
            padding: 8px;
            color: #383838;
        }

        .expenses_sales tr:nth-child(even){background-color: #f2f2f2;}


        .expenses_sales th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #ddd;
            color: #383838;
        }
    </style>

</head>
<body dir="ltr" >

<div class=" ">
    <table width="100%" style="padding: 10px" class="">
        <tr >

            <td class="" align="left" style="width: 40%;">
                <p>{{$lab->name}}</p>
                <p>

                    {{@$lab->address}}<br />
                </p>


            </td>

            <td></td>
            <td style="text-align: left">
                 <p  style="margin: 0px;padding: 0px">


                     Date d'impression : {{\Carbon\Carbon::parse()->format('d/m/Y h:m:i')}}<br>
                     Phone {{$lab->phone}}


                </p>
             </td>

        </tr>

    </table>
</div>

<hr  style="background-color: black; color: black">
<div class=" ">
    <table width="100%" style="padding: 10px" class="" d >
        <tr >



            <td  class="" align="left" style="width: 50%;">
                <p>Patient: {{@$emp->lastname}} {{@$emp->firstname}}</p>
                <p>

                    Adress :{{@$emp->adresse}}<br />
                </p>

            </td>

            <td style="text-align: left" style="width: 50%;">
                Date naissence : {{\Carbon\Carbon::parse($emp->birth_date)->format('d/m/Y')}}<br>
                 Cin : {{ ($emp->cin) }} <br>
                 Phone : {{ ($emp->phone) }}
            </td>

        </tr>

    </table>
</div>

<br/>

<div class="invoice expenses_sales">
    <table width="100%">
        <thead>
        <tr>
            <th style="text-align: left">Nom</th>
            <th  style="text-align: left">Date</th>
            <th  style="text-align: left">Prix</th>

        </tr>
        </thead>
        <tbody>

        <?php $total =0; ?>
        @foreach($emp->analyses as $anl )

        <tr>
            <td>{{$anl->name}}</td>
            <td>{{\Carbon\Carbon::parse($anl->created_at)->format('d/m/Y')}}</td>
            <td>{{$anl->price}}DH</td>
            <?php $total += $anl->price;?>

        </tr>




        @endforeach

        </tbody>

        <tfoot style="margin-top: 30px">





        <tr style="    background-color: #ffffff;">
            <td style="      font-weight: bold;  background-color: #d8d8d8;" colspan="2"  align="left">Total</td>
            <td style="      font-weight: bold;  background-color: #d8d8d8;" align="left" class="gray">{{ $total}} DH </td>
        </tr>


    

        </tfoot>
    </table>
</div>

</body>
</html>