import { Component, OnInit } from '@angular/core';

/**
 * Vendor
 */
import * as moment from 'moment';
import { MomentModule } from 'angular2-moment';

@Component({
  selector: 'app-departing',
  templateUrl: './departing.component.html',
  styleUrls: ['./departing.component.scss']
})
export class DepartingComponent implements OnInit {

  stops = [{
    'name': '1200-1300 Seaport Blvd',
    'description': 'parking lot at the circle',
    'duration': '24',
    'departing': [
      {
        'line': '258',
        'leaves': '3:45 pm',
        'arrives': '4:09 pm'
      },
      {
        'line': '366',
        'leaves': '4:24 pm',
        'arrives': '4:48 pm'
      }, {
        'line': '376',
        'leaves': '5:04 pm',
        'arrives': '5:28 pm'
      }, {
        'line': '385',
        'leaves': '6:00 pm',
        'arrives': '6:24 pm'
      }, {
        'line': '284',
        'leaves': '6:39 pm',
        'arrives': '7:03 pm'
      }, {
        'line': '190',
        'leaves': '7:50 pm',
        'arrives': '8:14 pm'
      }
    ]
  }, {
    'name': '1400 Seaport Blvd',
    'description': 'crosswalk between buildings 1400A & 1400B',
    'duration': '21',
    'departing': [
      {
        'line': '258',
        'leaves': '3:48 pm',
        'arrives': '4:09 pm'
      },
      {
        'line': '366',
        'leaves': '4:27 pm',
        'arrives': '4:48 pm'
      }, {
        'line': '376',
        'leaves': '5:07 pm',
        'arrives': '5:28 pm'
      }, {
        'line': '385',
        'leaves': '6:03 pm',
        'arrives': '6:24 pm'
      }, {
        'line': '284',
        'leaves': '6:42 pm',
        'arrives': '7:03 pm'
      }, {
        'line': '190',
        'leaves': '7:53 pm',
        'arrives': '8:14 pm'
      }
    ]
  }, {
    'name': '1700 Seaport Blvd',
    'description': '2nd crosswalk in front of building 1700',
    'duration': '18',
    'departing': [
      {
        'line': '258',
        'leaves': '3:51 pm',
        'arrives': '4:09 pm'
      },
      {
        'line': '366',
        'leaves': '4:30 pm',
        'arrives': '4:48 pm'
      }, {
        'line': '376',
        'leaves': '5:10 pm',
        'arrives': '5:28 pm'
      }, {
        'line': '385',
        'leaves': '6:06 pm',
        'arrives': '6:24 pm'
      }, {
        'line': '284',
        'leaves': '6:45 pm',
        'arrives': '7:03 pm'
      }, {
        'line': '190',
        'leaves': '7:56 pm',
        'arrives': '8:14 pm'
      }
    ]
  }, {
    'name': '1900-2000 Seaport Blvd',
    'description': 'circle between building 1900 & 2000',
    'duration': '12',
    'departing': [
      {
        'line': '258',
        'leaves': '3:54 pm',
        'arrives': '4:09 pm'
      },
      {
        'line': '366',
        'leaves': '4:33 pm',
        'arrives': '4:48 pm'
      }, {
        'line': '376',
        'leaves': '5:13 pm',
        'arrives': '5:28 pm'
      }, {
        'line': '385',
        'leaves': '6:09 pm',
        'arrives': '6:24 pm'
      }, {
        'line': '284',
        'leaves': '6:48 pm',
        'arrives': '7:03 pm'
      }, {
        'line': '190',
        'leaves': '7:59 pm',
        'arrives': '8:14 pm'
      }
    ]
  }];

  selectedStop = this.stops[0];

  constructor() { }

  ngOnInit() {
  }

  findETA(arrivalTime: string) {
    const startTime = moment().startOf('minute');
    const endTime = moment(arrivalTime, 'hh:mm a').startOf('minute');
    if (startTime.isAfter(endTime)) {
      endTime.add(1, 'days');
    }
    const duration = moment.duration(endTime.diff(startTime));
    const hours = duration.asHours();
    const minutes = duration.asMinutes();
    if (duration.asMinutes() >= 60) {
      const inHours = Math.floor(hours) + ' hours';
      return inHours;
    } else {
      const inMinutes = minutes + ' minutes';
      return inMinutes;
    }
  }

  findDuration(departureTime: string, arrivalTime: string) {
    const arrive = moment(arrivalTime, 'hh:mm a');
    const depart = moment(departureTime, 'hh:mm a');
    return (moment.duration(arrive.diff(depart))).asMinutes();
  }

}
