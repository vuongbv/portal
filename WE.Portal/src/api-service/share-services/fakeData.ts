import { SingleValueDto } from "../iot-services/models"
import { AlarmNotificationDtoPagedList } from "./models"

export const fakeMeasument: SingleValueDto = { id: "1", time: "2023-12-05T07:18:06.473Z", value: 155 }

export const alarmFakeApi: AlarmNotificationDtoPagedList = {
    "page_index": 1,
    "page_size": 10,
    "total_count": 1,
    "total_pages": 1,
    "index_from": 1,
    "items": [
        {
            "severity": "Major",
            "creation_time": "2023-11-08T10:15:35.361Z",
            "count": 157,
            "history": {},
            "source": {
                "name": "PMeter #1",
                "id": null
            },
            "type": "nodata",
            "time": "2023-11-08T10:15:35.377Z",
            "text": "[Power Meter 802] No data received",
            "status": "active",
            "id": "654b5fc7ff0df252348a0e42"
        }
    ],
    "has_previous_page": false,
    "has_next_page": false,
    "next": null,
    "previous": null
}

export const powerBiReportFake = {
    embed_url: "",
    token: "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiI0YzFmNTYwNS05Yzg3LTQxMTQtYjE3Ni1hMGY4ZmU5MDhmMWMiLCJuYW1lIjoiYjJjMSBUZXN0IiwiZ2l2ZW5fbmFtZSI6IkIyQzEiLCJmYW1pbHlfbmFtZSI6IlRlc3QiLCJlbWFpbHMiOlsiYjJjMUB3ZXRlc3QuYWkiXSwidGZwIjoiQjJDXzFfV2lyZWRnZVNpZ25pbl9ERVYiLCJub25jZSI6IjQ5ZWQ0M2VjLTViODgtNGY1Ny04ZDE4LTBiNjlhMGJjMjQxZCIsInNjcCI6ImFwaSIsImF6cCI6IjJlZjYyNjg4LTZhOWYtNGE2ZS1hOTQxLTk1OTljNjQ3NTc4YiIsInZlciI6IjEuMCIsImlhdCI6MTcwMTc1ODcyOSwiYXVkIjoiMmVmNjI2ODgtNmE5Zi00YTZlLWE5NDEtOTU5OWM2NDc1NzhiIiwiZXhwIjoxNzAxNzYyMzI5LCJpc3MiOiJodHRwczovL3dpcmVkZ2ViMmNkZXYuYjJjbG9naW4uY29tL2FiZTZhZDFhLWQ0NzYtNDJlMC1iMmY0LTI5MGJkYTJmMDYwYy92Mi4wLyIsIm5iZiI6MTcwMTc1ODcyOX0.eUZ4TBozqA6RSJkns5tB3HGnmkOQ1W13WvTwux0aKkjDSunj6dIayYPbPdl3bR91UsipqRYKRWOqxa6oHZZO251N3Rw60lJGOpy9p_AuYTWa6FgU4R3vvYhYZ9_aH7OMRk81Mh12glTvWTqbHDyXjlux7NO0R_wAP7pldrCR6CHq-0Mjd96ptdyiG2Rc3xXUr-ZnLw4OfRzHL931wrHcdpM_iIvVn2do81GdzK_Uv0zPnrh4fSKAccks4XDBxHkgBtp_Z6u2FwAP2rO-6kKO46umKZoCQGzB5a64P-xvqqx0VxEFLEUEhp6v8zC9d0eb-I8MtuImdcDWDs5Ynyhkyg",
    name: "",
    id: ""
}