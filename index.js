const axios = require('axios');

const accessToken = 'NEtJSlhpbGg3Mk5ZMkQ3akFEenhuaW9IcklkUU1WamMyZVBnd1BQNVBITUp5R29kbVhKSmxLNjhTSWtxMFBZdXNRTnE0VnNQaUR3YXkvcnlHSW9iajBRQU96VTJvbmp1dEpNZkZWMVpwUkE9fEhFMEF1WlVtWDc0ZTNzanlUNHBzQjJxeXdtM1lBeGJpV2htTWRhK1VJRkpaTEVoZTZzK3NNWmxkdFF4c001aERxRzZ2cmxpSnVENmJ4Nnl5OFlQc2VRPT0=';

const data = {"dailyAttendance":{"name":"Aheto  Jayden","age":8,"gender":"Male","phonenumber":"0244893968","weight":null,"height":null,"bp":"160/80","status":"out","bmi":18.5,"attendancedate":"2020-10-27T21:38:00+00:00","attendancetypeid":2,"remarks":"jkl","regionid":1,"districtid":95,"townid":845,"titleid":1,"maritalstatusid":1,"occupationid":1,"nationalityid":1,"religionid":2,"attendancecategoryid":2,"patientid":"p725241619","patientstatuscodeid":2,"patientrecordid":32,"userid":200009}}
axios.post('http://10.8.0.1:3000/dailyattendance1/dailyattendance', data, {headers: {authorization: 'Bearer ' + accessToken}})
.then(res => {console.log(res.data)})
.catch(err => {console.log(err.response)})