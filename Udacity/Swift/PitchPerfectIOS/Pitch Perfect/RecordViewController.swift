//
//  RecordViewController.swift
//  Pitch Perfect
//
//  Created by Thadeu Castelo Branco Ramos on 06/07/21.
//

import UIKit
import AVFAudio

class RecordViewController: UIViewController, AVAudioRecorderDelegate {
    @IBOutlet weak var recordButton: UIButton!
    @IBOutlet weak var recordLabel: UILabel!
    
    var isRecording = false
    func configureUI() {
        isRecording = !isRecording
        recordButton.setImage(UIImage(named: isRecording ? "Stop" : "Record"), for: .normal)
        recordLabel.text = isRecording ? "Record in progress" : "Tap to record"
    }

    var audioRecorder: AVAudioRecorder!
    func recordAudio() {
        if isRecording == true {
            let dirPath = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true)[0] as String
            let recordingName = "recordedVoice.wav"
            let pathArray = [dirPath, recordingName]
            let filePath = URL(string: pathArray.joined(separator: "/"))
            
            let session = AVAudioSession.sharedInstance()
            try! session.setCategory(AVAudioSession.Category.playAndRecord,mode: AVAudioSession.Mode.default, options: AVAudioSession.CategoryOptions.defaultToSpeaker)
            
            try! audioRecorder = AVAudioRecorder(url: filePath!, settings: [:])
            audioRecorder.delegate = self
            audioRecorder.isMeteringEnabled = true
            audioRecorder.prepareToRecord()
            audioRecorder.record()
        } else {
            audioRecorder.stop()
            let audioSession = AVAudioSession.sharedInstance()
            try! audioSession.setActive(false)
        }
    }
    
    @IBAction func recordButton(_ sender: Any) {
        configureUI()
        recordAudio()
    }
    
    func audioRecorderDidFinishRecording(_ recorder: AVAudioRecorder, successfully flag: Bool) {
        if flag {
            performSegue(withIdentifier: "stopRecording", sender: audioRecorder.url)
        } else {
            print("recording was not successful")
        }
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "stopRecording" {
            let playSoundsVC = segue.destination as! PlaybackViewController
            let recordedAudioURL = sender as! URL
            playSoundsVC.recordedAudioURL = recordedAudioURL
        }
    }
    override func viewDidLoad() {
        super.viewDidLoad()
    }
}
