# auto-shutdown-script-windows
To set up your Windows 11 PC to automatically power off after 2 hours, you can use the Task Scheduler to create a custom task. Here’s a step-by-step guide:

1. **Open Task Scheduler**:
   - Press `Win + S`, type “Task Scheduler”, and press Enter.

2. **Create a Basic Task**:
   - In the Task Scheduler window, click on “Create Basic Task” on the right side.

3. **Name Your Task**:
   - Give your task a name (e.g., “Auto Power Off”) and click “Next”.

4. **Set Trigger**:
   - Choose “Daily” or “One time” depending on your need. For daily power-off, select “Daily”, then click “Next”.
   - Set the start date and time for when you want the task to trigger. If you want it to run 2 hours from the current time, set the start time accordingly.

5. **Action**:
   - Select “Start a Program” and click “Next”.

6. **Program/Script**:
   - In the “Program/script” field, enter `shutdown`.
   - In the “Add arguments” field, enter `/s /f /t 0` (this forces an immediate shutdown).

7. **Finish**:
   - Review your settings and click “Finish”.

If you want a more dynamic solution that doesn’t require setting a specific time but rather counts 2 hours from the moment you start the timer, you can use a PowerShell script instead:

1. **Open Notepad** and paste the following script:

    ```powershell
    Start-Sleep -Seconds 7200
    Stop-Computer -Force
    ```

   (7200 seconds equals 2 hours.)

2. **Save the File**:
   - Save the file with a `.ps1` extension, for example, `auto_shutdown.ps1`.

3. **Run the Script**:
   - To run this script, you’ll need to open PowerShell as Administrator and execute it. Navigate to the folder where you saved the script and run:

    ```powershell
    .\auto_shutdown.ps1
    ```

Make sure to save any work before running these tasks, as your computer will shut down automatically!
